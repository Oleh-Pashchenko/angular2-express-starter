import mongoose = require("mongoose");
mongoose.Promise = global.Promise;

export module DatabaseModule {
    export class MongoDB {
        public static mongooseModel = mongoose.model;

        private static connectionString: string;

        public static Init(connectionString: string) {
            if (connectionString) {
                this.connectionString = connectionString;
                mongoose.connect(this.connectionString);
            }
        }
    }
}