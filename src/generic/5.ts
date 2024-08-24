export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

function getRoleDescription(role: UserRole): string {
  const descriptions: Record<UserRole, string> = {
    [UserRole.admin]: "Admin User",
    [UserRole.editor]: "Editor User",
    [UserRole.guest]: "Guest User",
  };

  return descriptions[role];
}
