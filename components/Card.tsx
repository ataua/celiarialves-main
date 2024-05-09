const Card = ( { children }: { children: React.ReactNode } ) => {
    return (
        <div className="flex flex-col content-center p-8 bg-white rounded-lg border border-gray-200 shadow-md min-h-[280px] min-w-full sm:min-w-[300px] sm:max-w-[400px] hover:-translate-x-1 hover:-translate-y-1 transition-all grow">
            { children }
        </div>
    )
}

export default Card