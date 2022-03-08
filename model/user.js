const allUsers = []

function generateARandomID(){
    return Math.floor(Math.random() * 1000)
}

module.exports = class User {

    findUserIndexByID(id){

        return allUsers.findIndex(user => user.id == id);
    }

    fetchAll() {
      return allUsers;
    }

    getUser(userId) {

        const userIndex = this.findUserIndexByID(userId);
        return allUsers[userIndex];
    }

    save(infos) {

        allUsers.push({
            ...infos,
            id: generateARandomID()
        })
    }

    editUser(newInfos) {

        const userIndex = this.findUserIndexByID(newInfos.id);
        allUsers[userIndex] = newInfos;
    }
  
    delete(userIdDelete) {

        const userIndex = this.findUserIndexByID(userIdDelete);
        allUsers.splice(userIndex, 1);
    }
};