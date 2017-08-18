<?php 

$data = json_decode(file_get_contents('php://input'));

$name = $data->{'name'};
$email = $data->{'email'};
$subject = $data->{'subject'};
$message = $data->{'message'};

echo json_encode($name);

?>