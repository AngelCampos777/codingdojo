import socket
import threading

# when public host will be private ip open ports server side?
HOST = '127.0.0.1'
PORT = 9090

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind((HOST, PORT))

server.listen()

clients = []
nicknames = []

#brodcast  - sends 1 message to all connected clients
def brodcast(message):
    for client in clients:
        client.send(message)

#recieve - accept connections from new clients
def recieve():
    while True:
        client, address = server.accept()
        print(f"Connected with {str(address)}!")

        client.send("NICK".encode('utf-8'))
        nickname = client.recv(1024)
        nicknames.append(nickname)
        clients.append(client)

        print(f"Nickname chosen was {nickname}.")
        brodcast(f"{nickname} has joined the chat.\n".encode('utf-8'))
        client.send("Connection Successful.".encode('utf-8'))

        thread = threading.Thread(target = handle, args = (client,))
        thread.start()

#handle - handles individual connections of the clients
def handle(client):
    while True:
        try:
            message = client.recv(1024)
            print(f"{nicknames[clients.index(client)]} said {message}")
            brodcast(message)
        except:
            index = clients.index(client)
            clients.remove(client)
            client.close()
            nickname = nicknames[index]
            nicknames.remove(nickname)
            break
print("Server running...")
recieve()