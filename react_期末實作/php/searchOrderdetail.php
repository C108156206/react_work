<?php
// update-user.php is for updating an existing user.
// Method: POST - http://localhost/php-react/update-user.php
// Required Fields: id --> EmpId, user_name --> EmpName, user_email --> JobTitle

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
$sql = "SELECT * FROM `orderdetail`";

if (isset($data->keyword)) {
    $sql .= " WHERE `OrderId` LIKE '%$data->keyword%'";
}

$query = mysqli_query($db_connection, $sql);
if (mysqli_num_rows($query) > 0) {
    $orderdetail = mysqli_fetch_all($query, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "msg" => "Search success", "orderdetail" =>  $orderdetail]);
} else {
    echo json_encode(["success" => 0, "msg" => "Search failed"]);
}
?>