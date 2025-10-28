<div class="p-6 max-w-6xl mx-auto">
    <div class="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-10 items-start">
        
        <div class="md:w-2/5 w-full">
            
        </div>
        
        <div class="md:w-3/5 w-full">
            <h1 class="text-3xl font-bold mb-3">
                {app.title}
            </h1>
            <p class="text-gray-600 mb-4">
                {app.description}
            </p>
            
            <div class="grid grid-cols-3 gap-6 mt-8 text-center">
                <div>
                    
                    <p class="font-semibold">{app.downloads.toLocaleString()}</p>
                    <p class="text-gray-500 text-sm">Downloads</p>
                </div>
                <div>
                    
                    <p class="font-semibold">{app.ratingAvg.toFixed(1)}</p>
                    <p class="text-gray-500 text-sm">Rating</p>
                </div>
                <div>
                    
                    <p class="font-semibold">{app.reviews.toLocaleString()}</p>
                    <p class="text-gray-500 text-sm">Reviews</p>
                </div>
            </div>
            
            <div class="mt-8">
                <button class="px-20 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                    Install App
                </button>
            </div>
        </div>
    </div>
    
    <div class="bg-white rounded-2xl shadow-md mt-10 p-6">
        <h2 class="text-2xl font-semibold mb-4">Rating</h2>
        
    </div>

    <div>
        <AppDescription></AppDescription>
    </div>
</div>