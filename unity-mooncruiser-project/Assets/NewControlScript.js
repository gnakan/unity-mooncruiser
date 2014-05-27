#pragma strict

var forwardSpeed : float = 3;
var turnSpeed : float = 2;

function Update () 
{
	//forward speed
	var forwardMoveAmount = Input.GetAxis("Vertical") * forwardSpeed;
	
	//actual turn amount
	var turnAmount = Input.GetAxis("Horizontal") * turnSpeed;
	
	//rotate the vehicle
	transform.Rotate(0,turnAmount,0);
	
	//push the vehicle forward with a force
	rigidbody.AddRelativeForce(0,0,forwardMoveAmount);
	
}