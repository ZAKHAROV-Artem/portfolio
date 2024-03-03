import email from "@/actions/post/email";
import { useMutation } from "@tanstack/react-query";

export const useEmail = () => {
  const mutation = useMutation({
    mutationFn: email,
  });
  return mutation;
};
