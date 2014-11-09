<?php
include '../../config.php';
require 'Slim/Slim.php';

$app = new Slim();
$app->get('/contacts', 'getContacts');
$app->post('/contacts', 'addContact');
$app->put('/contacts/:id', 'updateContact');
$app->delete('/contacts/:id', 'deleteContact');
$app->run();

function getContacts() {

  $db = getconn();
  $data = array();
  $sql = "select * from directory.contacts";

  if( !$results = $db->query($sql) ) {
    echo "error: " . $db->error ;
  } else {
    while( $row = $results->fetch_assoc() ) {
      $data[] = array("id" => $row["id"], "firstname" => $row["firstname"], "lastname" => $row["lastname"], "tel" => $row["tel"], "email" => $row["email"]);
    }
    echo json_encode($data);
  }

  $results->free();
  $db->close();

}

function addContact() {

  $request = Slim::getInstance()->request();
  $body = $request->getBody();
  $data = json_decode($body);

  $db = getconn();
  $sql = "insert into directory.contacts (firstname, lastname, tel, email)
          values ('". $data->firstname ."', '". $data->lastname ."', '" . $data->tel ."', '". $data->email ."')";

  $db->query($sql);
  if($db->affected_rows == 0) {
    echo "Record not added";
  }

  $data->id = $db->insert_id;
  echo json_encode($data);

  $db->close();

}

function updateContact($id) {

  $request = Slim::getInstanct()->request();
  $body = $request->getBody();
  $data = json_encode($body);

  $db = getConn();
  $sql = "update directory.contacts set
          firstname = '". $data->firstname ."',
          lastname = '". $data->lastname ."','
          tel = '". $data->tel ."',
          email = '". $data->email ."'
          where id = ". $data->id;

  $db->query($sql);
  if($db->affected_rows == 0) {
    echo "Record not updated";
  }

  $db->close();

}

function deleteContact($id) {

  $db = getConn();
  $sql = "delete from directory.contacts where id = ". $id;

  $db->query($sql);
  if($db->affected_rows == 0) {
    echo "Record not deleted";
  }

  $db->close();

}



?>
