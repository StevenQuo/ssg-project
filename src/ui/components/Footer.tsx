import Link from 'next/link';
import menu from '@/data/menu.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-neutral-300 bg-neutral-50 dark:bg-black">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				<div className="grid grid-cols-3 gap-8 py-16">
					<ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
                        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">ECOME</h3>
                        {menu.map((item) => {
                            return (
                                <li key={item.slug} className="text-sm">
                                    <Link href={`/${item.slug}`}>{item.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
				</div>

				<div className="flex flex-col justify-between border-t border-neutral-200 py-10 sm:flex-row">
					<p className="text-sm text-neutral-500">Copyright &copy; {currentYear} ECOME, Inc.</p>
				</div>
			</div>
		</footer>
  )
}

export default Footer