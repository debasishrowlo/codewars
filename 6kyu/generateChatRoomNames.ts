export function generateChatRoomNames(users: string[]): string[] {
  if (users.length === 0) return []
  
  const lowercasedUsers = users.map(user => user.toLowerCase())
  
  return lowercasedUsers
    .sort()
    .map((user, index) => {
      const [firstName, lastName] = user.split(" ")
      
      let username = firstName[0].toUpperCase() + firstName.slice(1)
      
      let duplicateUserLastNameInitials:string[] = []
            
      lowercasedUsers.forEach((sUser, sIndex) => {
        const [sFirstName, sLastName] = sUser.split(" ")
        if (firstName === sFirstName && index !== sIndex) {
          duplicateUserLastNameInitials.push(sLastName[0])
        }
      })
      
      if (duplicateUserLastNameInitials.length) {
        username += " " + lastName[0].toUpperCase()
        
        if (duplicateUserLastNameInitials.includes(lastName[0])) {
          username += lastName.slice(1)
        }
      }
      
      return username
    })
}
