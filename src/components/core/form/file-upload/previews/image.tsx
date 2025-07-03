import { ImagePlus } from 'lucide-react';

import { cn } from '@/lib/utils';

const ImagePreview: React.FC<{ preview: string | ArrayBuffer | null; small?: boolean; className?: string }> = ({
	preview,
	small,
	className,
}) => {
	if (small) {
		return (
			<div className={cn('size-full h-[50px]', className)}>
				{preview ? (
					<img className='size-full rounded-lg object-contain' src={preview as string} alt='User image' />
				) : (
					<div className='flex size-full flex-col items-center justify-center space-y-3'>
						<ImagePlus className={cn(`block size-8`, preview && 'hidden')} />
						<p className='text-sm text-gray-500 dark:text-gray-400'>
							<span className='font-semibold'>Click to upload</span> or drag and drop
						</p>
						<p className='text-xs text-gray-500 dark:text-gray-400'>SVG, PNG, JPG or GIF</p>
					</div>
				)}
			</div>
		);
	}
	return (
		<div className={cn('size-full max-h-[200px]', className)}>
			{preview ? (
				<img className='size-full rounded-lg object-contain' src={preview as string} alt='User image' />
			) : (
				<div className='flex size-full flex-col items-center justify-center space-y-3'>
					<ImagePlus className={cn(`block size-8`, preview && 'hidden')} />
					<p className='text-sm text-gray-500 dark:text-gray-400'>
						<span className='font-semibold'>Click to upload</span> or drag and drop
					</p>
					<p className='text-xs text-gray-500 dark:text-gray-400'>SVG, PNG, JPG or GIF</p>
				</div>
			)}
		</div>
	);
};

export default ImagePreview;
