import { NextResponse } from "next/server";

// TODO: Agregar a la ruta correspondiente y revisar si queremos sumar el live feed
// TODO2: Manejar errores de las requests
// TODO3: Tipar responses
export async function GET() {
	if (!process.env.TWITCH_CLIENT_ID || !process.env.TWITCH_CLIENT_SECRET)
		return NextResponse.error();

	const authData = await fetch(`https://id.twitch.tv/oauth2/token`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			client_id: process.env.TWITCH_CLIENT_ID,
			client_secret: process.env.TWITCH_CLIENT_SECRET,
			grant_type: 'client_credentials'
		})
	})

	const { access_token } = await authData.json();
	
	const streamData = await fetch(`https://api.twitch.tv/helix/streams?user_login=frontend_army`, {
		headers: {
			'Authorization': `Bearer ${access_token}`,
			'Client-Id': process.env.TWITCH_CLIENT_ID,
		}
	});
	return NextResponse.json(streamData);
}
