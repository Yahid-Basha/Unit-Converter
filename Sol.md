To solve this Webpack configuration question step-by-step, follow the instructions carefully to set up your configuration file correctly:

Step 1: Entry Point

Goal: Specify the entry file for Webpack.

What to do: The question asks you to set the entry point as index.coffee located in the src folder.


entry: './src/index.coffee',

This tells Webpack where to start building the dependency graph. Here, Webpack will start at the index.coffee file in the src directory.

Step 2: Output Configuration

Goal: Specify the output file location.

What to do: You need to configure Webpack to output the bundled file in the public directory with the filename build.js.


output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'build.js'
}

This block specifies where the output file should be stored (public folder) and under what name (build.js).

Step 3: Loaders

Goal: Set up loaders to handle specific file types.

What to do:

1. Use coffee-loader to handle .coffee files and exclude the node_modules directory.


2. Use style-loader and css-loader to load .css files.




module: {
    rules: [
        {
            test: /\.coffee$/,
            use: 'coffee-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
}

Loaders are transformations applied to the files as Webpack processes them. Here, .coffee files are handled by coffee-loader, and .css files are processed with style-loader and css-loader.

Step 4: Plugins

Goal: Configure plugins to extend Webpack’s functionality.

What to do: Use html-webpack-plugin to generate an HTML file and specify that the template file is index.html located in the public folder.


plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html'
    })
]

HtmlWebpackPlugin simplifies the creation of HTML files to include all your bundles.

Step 5: devServer Configuration

Goal: Configure the Webpack development server.

What to do:

Set the port to 8000.

Allow all hosts.

Set static to the public folder.



devServer: {
    port: 8000,
    allowedHosts: 'all',
    static: path.resolve(__dirname, 'public')
}

The devServer configuration allows you to run a local server on port 8000 and serve files from the public folder.

Step 6: Mode

Goal: Set the mode to development.

What to do: You need to specify the Webpack mode as development.


mode: 'development'

This sets up Webpack for a development environment, optimizing for fast rebuilds and providing detailed error messages.

Step 7: Resolve Configuration

Goal: Set up resolve configuration to include package.json.

What to do: Add descriptionFiles with package.json in the array.


resolve: {
    descriptionFiles: ['package.json']
}

The resolve option tells Webpack how to look for modules, and specifying descriptionFiles allows Webpack to look for certain files while resolving modules.

Step 8: Optimization

Goal: Set the mergeDuplicateChunks property of optimization.

What to do: Enable mergeDuplicateChunks to optimize the build.


optimization: {
    mergeDuplicateChunks: true
}

This setting allows Webpack to optimize the output by merging duplicate chunks.

Final Webpack Configuration:

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.coffee',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.coffee$/,
                use: 'coffee-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        port: 8000,
        allowedHosts: 'all',
        static: path.resolve(__dirname, 'public')
    },
    mode: 'development',
    resolve: {
        descriptionFiles: ['package.json']
    },
    optimization: {
        mergeDuplicateChunks: true
    }
};

Instructions to Run:

1. Click Run -> Install to install the necessary packages.


2. Click Run -> Run Server to start the server.


3. Click Run -> Preview App to launch the app on the browser.


4. Click Run -> Test to test your application.


5. Once everything is working, Submit Code followed by Submit Test to finalize the submission.



This step-by-step approach should help you pass the Webpack configuration test by ensuring all the requirements are correctly implemented.

