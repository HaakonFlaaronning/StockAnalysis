# Metric comparison

Comparison of common fundamental stock indicators to see what combination of indicator values made for the highest return from 2000-2019 by holding the top 30 stocks for one full year.

Stock data were fetched from the API of Financial Modelling Prep: https://financialmodelingprep.com/developer/docs

The data is stored in my local PostgreSQL database. A copy of the database can be given upon request.

Python was the programming lanuage of choice for the data analysis. The website is set up using React JS with Express JS backend connected to the PostgreSQL database.

## Overview of indicators and average returns
Combination of metrics can be selected by one-five tab at the top.
![Screenshot 2021-08-24 155232](https://user-images.githubusercontent.com/57355918/130629145-1e0add48-b9c6-43aa-a641-3a3247fceaa1.png)

## Example: Overview of yearly return by holding the top 30 companies with the best price to sales ratio for one full year
![image](https://user-images.githubusercontent.com/57355918/130629738-931c9917-ab1d-4335-944e-46ad50e2cc29.png)

## Example: The top 30 companies with the best price to sales ratio in the first quarter of year 2000
The one year return are the return you would get by holding the stock for one full year until the first quarter of 2001.
![image](https://user-images.githubusercontent.com/57355918/130629801-4721a099-394a-4483-bcad-eb3bf2218a2d.png)

