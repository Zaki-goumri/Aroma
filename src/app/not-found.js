import Link from 'next/link'
 
export default function NotFound() {
return (
    <div className="text-center mt-12">
        <h2 className="text-red-500">Not Found</h2>
        <p className="text-lg text-gray-600">Could not find requested resource</p>
        
            <Link href="/" className="text-blue-500 underline">Return Home

        </Link>
    </div>
)
}