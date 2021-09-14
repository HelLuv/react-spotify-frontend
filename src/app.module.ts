import { Module } from "@nestjs/common";
<<<<<<< HEAD
=======
import { MongooseModule } from "@nestjs/mongoose";
import { TrackModule } from './track/track.module';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path';

>>>>>>> e8ef093c48e979ac51b368b79b5b4dfff3f07c25



@Module({
<<<<<<< HEAD
=======
	imports: [
		ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
		MongooseModule.forRoot('mongodb+srv://myriad:myriad@backend.kjbfa.mongodb.net/Backend?retryWrites=true&w=majority'),
		TrackModule,
		FileModule
	]
>>>>>>> e8ef093c48e979ac51b368b79b5b4dfff3f07c25
})

export class AppModule { }