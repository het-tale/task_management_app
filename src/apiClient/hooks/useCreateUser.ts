import { useMutation } from "@tanstack/react-query";
import { createUserMutation } from "../services/create-user";
import { useToast } from "@/components/ui/use-toast";

export const useCreateUser = () => {
	const { toast } = useToast();
	const mutation = useMutation({
		mutationFn: createUserMutation,
		onSuccess: () => {
			toast({
				title: "Registration success",
				description: "Congrats! You registered"
			});
		},
		onError: (error) => {
			toast({
				title: "Registration failed",
				description: `${error}`,
				variant: "destructive"
			});
		}
	});
	return {
		mutation
	};
};
