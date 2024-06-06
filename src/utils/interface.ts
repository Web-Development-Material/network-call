export interface UserFormProps {
  userId?: string;
  onSuccess?: () => void;
}

export interface UserListProps {
  id: string;
  name: string;
  email: string;
}

export interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
}
