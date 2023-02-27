// Next imports
import Head from 'next/head'

// Component imports
import SocialButton from '../components/buttons/SocialButton'


export default function Home()
{
	return (
		<>
			<Head>
				<title>SaneBase</title>
				<meta name='description' content='Nextjs, Firebase, Firestore, Sanity for authentication boilerplate' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">

					<h2 className="my-6 text-center text-7xl font-extrabold text-orange-500">SaneBase</h2>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Or{' '}
						<a href="#" className="font-medium text-orange-600 hover:text-orange-500">
							start your 14-day free trial
						</a>
					</p>
				</div>

				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
						<form className="space-y-6" action="#" method="POST">
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700">
									Email address
								</label>
								<div className="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
									/>
								</div>
							</div>

							<div>
								<label htmlFor="password" className="block text-sm font-medium text-gray-700">
									Password
								</label>
								<div className="mt-1">
									<input
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										required
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
									/>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
									/>
									<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
										Remember me
									</label>
								</div>

								<div className="text-sm">
									<a href="#" className="font-medium text-orange-600 hover:text-orange-500">
										Forgot your password?
									</a>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
								>
									Sign in
								</button>
							</div>
						</form>

						<div className="mt-6">
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-t border-gray-300" />
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="px-2 bg-white text-gray-500">Or continue with</span>
								</div>
							</div>

							<div className="mt-6 grid grid-cols-3 gap-3">

								<SocialButton
									provider='google'
									text='Sign in with Google'
								/>

								<SocialButton
									provider='twitter'
									text='Sign in with Google'
								/>

								<SocialButton
									provider='github'
									text='Sign in with Github'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
