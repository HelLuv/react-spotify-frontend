import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'


const start = async () => {
	try {
		const PORT = process.env.PORT || 5000;
		const app = await NestFactory.create(AppModule);
<<<<<<< HEAD

=======
		app.enableCors();
>>>>>>> e8ef093c48e979ac51b368b79b5b4dfff3f07c25
		await app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));

	} catch (e) {
		console.log(e);
	}
}

start();