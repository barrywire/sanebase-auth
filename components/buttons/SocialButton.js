// Icon imports
import { FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa'


export default function SocialButton({ text, provider, action })
{
    const Icon = {
        google: FaGoogle,
        twitter: FaTwitter,
        github: FaGithub,
    }[provider]

    return (
        <>
            <div>
                <button
                    type='button'
                    onClick={action}
                    className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                    <span className="sr-only">{text}</span>
                    <Icon className='h-4 w-40' />
                </button>
            </div>
        </>
    )
}