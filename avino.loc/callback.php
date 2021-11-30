<?php

$recepient = "C1378827@yandex.ru";
$sitename = "#";

$name = trim($_POST["name1"]);
$phone = trim($_POST["phone1"]);

$message = "ФИ0: $name\n Телефон: $phone \n\n\nЗаявка на обратный звонок";

$pagetitle = "Новая заявка с лендинга \"Качественное Профессиональное оборудование для Виноделия\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");