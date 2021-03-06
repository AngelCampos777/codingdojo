import socket
import threading
import tkinter
import tkinter.scrolledtext
from tkinter import simpledialog

# when public host will be public ip
HOST = '127.0.0.1'
PORT = 9090

class Client:
    #create a client, client creates a socket, connects host to port
    def __init__(self, host, port):
        self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.sock.connect((host, port))

        msg = tkinter.Tk()
        msg.withdraw()
    #takes nickname from user
        self.nickname = simpledialog.askstring("Nickname", "What should we call you?", parent = msg)

        self.gui_done = False
        self.running = True
    #builds and maintains gui
        gui_thread = threading.Thread(target = self.gui_loop)
    #connects to server/ deals w server connection
        recieve_thread = threading.Thread(target = self.recieve)

        gui_thread.start()
        recieve_thread.start()

    #builds gui no logic or functionality
    def gui_loop(self):
        self.win = tkinter.Tk()
        self.win.configure(bg="lightblue")

        self.chat_label = tkinter.Label(self.win, text="Chat:", bg="lightblue")
        self.chat_label.config(font = ("Arial", 14))
        self.chat_label.pack(padx=20, pady=5)

        self.text_area = tkinter.scrolledtext.ScrolledText(self.win)
        self.text_area.pack(padx=20, pady=5)
        self.text_area.config(state='disabled')

        self.msg_label = tkinter.Label(self.win, text="Message:", bg="lightblue")
        self.msg_label.config(font = ("Arial", 14))
        self.msg_label.pack(padx=20, pady=5)

        self.input_area = tkinter.Text(self.win, height=5)
        self.input_area.pack(padx=20, pady=5)

        self.send_button = tkinter.Button(self.win, text="Send", command = self.write)
        self.send_button.config(font = ("Arial", 14))
        self.send_button.pack(padx=20, pady=5)

        self.gui_done = True

        self.win.protocol("WM_DELETE_WINDOW", self.stop)

        self.win.mainloop()

    #take text in msg box, send to server, clear msg box
    def write(self):
        message = f"{self.nickname}: {self.input_area.get('1.0', 'end')}"
        self.sock.send(message.encode('utf-8'))
        self.input_area.delete('1.0', 'end')

    #handles connection, recieves msg from server
    def recieve(self):
        while self.running:
            try:
                message = self.sock.recv(1024).decode('utf-8')
                if message == "NICK":
                    self.sock.send(self.nickname.encode('utf-8'))
                else:
                    if self.gui_done:
                        self.text_area.config(state = 'normal')
                        self.text_area.insert('end', message)
                        self.text_area.yview('end')
                        self.text_area.config(state = 'disabled')
            except ConnectionAbortedError:
                break
            except:
                print("Something went wrong...")
                self.sock.close()
                break

    #terminates program
    def stop(self):
        self.running = False
        self.win.destroy()
        self.sock.close()
        exit(0)

client = Client(HOST, PORT)