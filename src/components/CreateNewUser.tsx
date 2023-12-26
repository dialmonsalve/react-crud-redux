import { Button, Card, TextInput, Title } from "@tremor/react";
import { useUsersActions } from "../hooks/useUsersActions";

export function CreateNewUser() {
	const { addUser } = useUsersActions();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;
		addUser({ name, email, github });
    form.reset()
	};
	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Crear nuevo usuario</Title>

			<form onSubmit={handleSubmit}>
				<TextInput name="name" placeholder="Aquí el nombre" />
				<TextInput name="email" placeholder="Aquí el email" />
				<TextInput name="github" placeholder="Aquí el usuario de github" />
				<div>
					<Button type="submit" style={{ marginTop: "16px" }}>
						Crear Usuario
					</Button>
				</div>
			</form>
		</Card>
	);
}
