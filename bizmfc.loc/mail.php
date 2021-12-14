<?php

$recepient = "webidev.io@gmail.com";
$sitename = "b-mfc.ru";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Телефон: $phone \n Имя: $name\nEmail: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");