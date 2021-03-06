<?php
$friends = [
    ['name' => 'Monica', 'drinkId' => 1, 'type' => 'brunette', 'seasonsDrinks' => [22,24,20,22,32,16,20,14,18,12]],

    ['name' => 'Rachel', 'drinkId' => 1, 'type' => 'blonde', 'seasonsDrinks' => [10,8,11,18,18,23,14,17,11,8]],

    ['name' => 'Phoebe', 'drinkId' => 1, 'type' => 'blonde', 'seasonsDrinks' => [27,32,27,18,20,23,27,20,18,14]],

    ['name' => 'Ross', 'drinkId' => 2, 'type' => 'man', 'seasonsDrinks' => [28,19,21,13,19,23,17,19,17,13]],

    ['name' => 'Chandler', 'drinkId' => 3, 'type' => 'man', 'seasonsDrinks' => [38,19,32,17,34,21,19,8,11,13]],

    ['name' => 'Joey', 'drinkId' => 4, 'type' => 'man', 'seasonsDrinks' => [32,17,19,21,25,17,19,11,15,13]],
];

$drinks = [
    [
        'id' => 1,   
        'name' => 'Decaf Cappuccino',
        'calories' => 165, 
        'icon' => 'cappuccino', 
        'dollars' => 3.95, 
        'ingredients' => ['espresso', 'milk', 'sugar'],
    ],
    [
        'id' => 2,   
        'name' => 'Ice tea',
        'calories' => 90, 
        'icon' => 'tea', 
        'dollars' => 2.25, 
        'ingredients' => ['coffee', 'boiled water', 'sugar'],
    ],
    [
        'id' => 3,   
        'name' => 'Coffee black',
        'calories' => 16, 
        'icon' => 'coffee', 
        'dollars' => 2.50, 
        'ingredients' => ['tea', 'cold water', 'ice '],
    ],
    [
        'id' => 4,   
        'name' => 'Latte',
        'calories' => 240, 
        'icon' => 'latte', 
        'dollars' => 3.95, 
        'ingredients' => ['coffee', 'frothy milk', 'sugar'],
    ],
];

$totalTypes = [['type' => 'drinks', 'color' => 'red'], ['type' => 'dollars', 'color' => 'blue'], ['type' => 'calories', 'color' => 'yellow']];

function getColor($index) {
    if($index + 1 == 1 || ($index+1)%3 == 1) {
        return 'red';
    }
    elseif(($index+1)%3 == 0) {
        return 'yellow';
    }
    else{
        return 'blue';
    }
}