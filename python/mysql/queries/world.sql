SELECT * FROM cities;
SELECT * FROM languages;
SELECT * FROM countries;

SELECT countries.region, count(countries.name) AS country_count
FROM countries
GROUP BY countries.region
ORDER BY country_count DESC;