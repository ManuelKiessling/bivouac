var Room = function(name) {
  this.name = name;
  this.users = [];
  this.communications = [];
}

Room.prototype.addUser = function(user) {
  console.log("Entered room: " + user.name);
  this.users.push(user);
  var communication = new SystemCommunication("User " + user.name + " entered the chat.");
  this.addCommunication(communication);
}

Room.prototype.getUsers = function() {
  return this.users;
}

Room.prototype.addCommunication = function(communication) {
  this.communications.push(communication);
}

Room.prototype.getCommunications = function() {
  return this.communications;
}

Room.prototype.markCommunicationAsDelivered = function(communication) {
  var index = this.communications.indexOf(communication);
  if (index !== -1) {
    console.log('Delivered message: ' + communication.message);
    this.communications.splice(index, 1);
  }
}

exports.Room = Room;
