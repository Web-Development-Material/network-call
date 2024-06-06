export interface UserFormProps {
  userId?: string;
  onSuccess?: () => void;
}

export interface UserListProps {
  id: string;
  name: string;
  email: string;
}
