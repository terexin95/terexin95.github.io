<?php

$recepient = "C1378827@yandex.ru";
$sitename = "#";

$name = trim($_POST["name2"]);
$phone = trim($_POST["phone2"]);
$addr = trim($_POST["adress"]);
$email = trim($_POST["email"]);
$header = trim($_POST["header"]);
$comment = trim($_POST["comment"]);
$title_products = trim($_POST["title-products"]);
$products_total = trim($_POST["products-total"]);

$message = "\nФИ0: $name\n Телефон: $phone \n Email: $email\n Адресс: $addr\n\n Комментарий: $comment \n\n Товары: $title_products \n----------------------------------\n Итоговая сумма: $products_total \n\n\n Заявка с : $header";

$pagetitle = "Новая заявка с лендинга \"$header\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");