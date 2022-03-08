const allUsers = []

function generateARandomID(){
    return Math.floor(Math.random() * 1000)
}

module.exports = class User {

    save(infos) {

        allUsers.push({
            ...infos,
            id: generateARandomID()
        })
    }
  
    delete(userIdDelete) {

        const userIndexDelete = allUsers.findIndex(user => user.id == userIdDelete);
        allUsers.splice(userIndexDelete, 1);
    }

    fetchAll() {
      return allUsers;
    }
};