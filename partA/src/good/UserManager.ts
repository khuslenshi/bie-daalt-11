export interface User {
  id: string;
  email: string;
  name: string;
}

export class UserManager {

  private users: User[] = [];

  createUser(user: User): User {
    this.users.push(user);
    return user;
  }

  getUserById(id: string): User | null {
    return this.users.find(u => u.id === id) || null;
  }

  getUserByEmail(email: string): User | null {
    return this.users.find(u => u.email === email) || null;
  }

  searchUsers(query: string): User[] {
    return this.users.filter(u => u.name.includes(query));
  }

  deleteUser(id: string): boolean {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) return false;
    this.users.splice(index, 1);
    return true;
  }
}
