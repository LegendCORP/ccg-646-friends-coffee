
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>How much coffee did the Friends characters really drink?</title>
        <meta name="description" content="We worked out exactly how much money each of the Friends characters would have spent on coffee over all 10 seasons and how many calories they consumed." />
       <link media="all" rel="stylesheet" href="dist/bundle.css">
    </head>

    <body>
        <?php include "sprite.php"; ?>
        <?php include "content.php"; ?>

        <div id="wrapper">
        <header class="header">
            <div class="container header__container">
                <a href="/" class="header__logo-link">
                    <img class="header__logo-img" src="images/logo.png" alt="CardsChat.com">
                </a>
                <ul class="social-links social-links--header">
                    <li class="social-links__item">
                        <a href="https://twitter.com/intent/tweet?text=I%20just%20scored%200%20in%20this%20Texas%20Hold%27em%20Interactive%20%23Poker%20%23Quiz%20–%20think%20your%20worthy%20of%20a%20final%20table%20spot?%20https%3A%2F%2Fwww.cardschat.com%2Fwhich-hand-wins%2F%20♣️%20♥️%20♠️"
                            class="social-links__link icon-twitter js-game-share-top-link" data-social-links="twitter"
                            target="_blank" rel="noopener noreferrer"></a>
                    </li>
                    <li class="social-links__item">
                        <a href="//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.cardschat.com%2Fwhich-hand-wins&quote=I%20just%20scored%200%20in%20this%20Texas%20Hold%27em%20Interactive%20%23Poker%20%23Quiz%20%E2%80%93%20think%20your%20worthy%20of%20a%20final%20table%20spot%3F%20https%3A%2F%2Fwww.cardschat.com%2Fwhich-hand-wins%2F%20♣️%20♥️%20♠️"
                            class="social-links__link icon-facebook js-game-share-top-link" data-social-links="facebook"
                            target="_blank" rel="noopener noreferrer"></a>
                    </li>
                </ul>
            </div>
        </header>
        <section class="container">
            <h1 class="text-center text-white">How much each Friends characters would spend on their coffees today and how many calories they would have consumed</h1>
        </section>
        <div class="container">
            <section class="section section--white">
                <div class="img-wrap img-wrap--lg-radius">
                    <img src="images/central-perk.png" alt="central perk">
                </div>
                <h3 class="text-center">Favorite drink of each Friends character</h3>
                <div class="js-readmore-container-top">
                    <div class="read-more__trigger js-readmore-trigger-top">
                        <div class="js-readmore-text-top"></div>
                        <i class="fa-angle-down"></i>
                    </div>
                    <div class="js-readmore-top">
                        <div class="friend-drinks">

                        <?php foreach($friends as $friendDrink): ?>
                        
                            <div class="friend-drink">
                                <div class="avatar avatar--lg">
                                    <img src="<?php echo "images/avatars/" . $friendDrink['name'] . ".png"; ?>" alt="monika">
                                </div>
                                <div class="friend-drink__info">
                                    <div class="friend-drink__name">
                            
                                        <span><?php echo $friendDrink['name']; ?></span>

                                        <svg class="svg-icon">
                                            <use xlink:href="#icon-<?php echo $friendDrink['type']; ?>"></use>
                                        </svg>
                                    </div>
                                    <div class="friend-drink__drink">
                            
                                        <span><?php echo $drinks[$friendDrink['drinkId'] - 1]['name']; ?></span>

                                        <svg class="svg-icon">
                                            <use x='0' y='0' xlink:href="#icon-<?php echo $drinks[$friendDrink['drinkId'] - 1]['icon']; ?>"></use>
                                        </svg>
                                    </div>
                                    <div class="friend-drink__values">
                                        <div class="sausage sausage--sm sausage--red sausage--dot">
                                            <i class="dot dot--sm"></i>

                                            <?php echo '$ ' . $drinks[$friendDrink['drinkId'] - 1]['price'] ;?>

                                        </div>
                                        <div class="sausage sausage--sm sausage--blue sausage--dot">
                                            <i class="dot dot--sm"></i>
                            
                                            <?php echo 'Cal ' . $drinks[$friendDrink['drinkId'] - 1]['calories'] ;?>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        <?php endforeach; ?>
                        
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
        <script src="dist/js/pages/friends-coffee-costs-and-calories.js"></script> 
    </body>
</html>