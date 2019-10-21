create table houses(
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    img text,
    mortgage decimal,
    rent decimal
)

-- data input

insert into house(
    name, address, city, state, zip, img, mortgage, rent
)values(
    $1, $2, $3, $4, $5, $6, $7, $8
)