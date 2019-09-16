<?php

$recepient = "daria@podscriptom.com";
$sitename = "https://school.inyazrf.ru/";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$language = trim($_POST["language"]);
$message = "Имя: $name \nТелефон: $phone \nЯзык: $language";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");