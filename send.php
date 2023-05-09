<?php 

$errors = [];
$data = [];

if (empty($_POST['name'])) {
    $errors['name'] = 'Name is required.';
}

if (empty($_POST['phone'])) {
    $errors['phone'] = 'Phone is required.';
}
if (empty($_POST['name_modal'])) {
    $errors['name'] = 'Name is required.';
}

if (empty($_POST['phone_modal'])) {
    $errors['phone'] = 'Phone is required.';
}

if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else {
    $data['success'] = true;
    $data['message'] = 'Success!';
}

$to      = 'bahmackaalarisa@gmail.com';
$subject = 'Заявка на Аренду квартиры';
$message = '
<p>Имя: '.$_POST['name'] . $_POST['name_modal'].'</p>
<p>Телефон: '.$_POST['phone']. $_POST['phone_modal'].'</p>
';
$headers = 'From: Oneyssi@somemail.com' . "\r\n" .
    'Reply-To: Oneyssi@somemail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

 ?>