const Card = ( { children }: { children: React.ReactNode } ) => {
    return (
        <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-md min-h-[280px] min-w-[320px] hover:-translate-x-1 hover:-translate-y-1 transition-all">
            { children }
        </div>
    )
}

export default Card