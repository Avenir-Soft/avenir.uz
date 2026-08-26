'use client'

import { useLanguage } from '@/components/language-provider'
import { SectionOrnaments } from '@/components/section-ornaments'
import amirqulovPhoto from '@/public/team/amirqulov-shoxrux.webp'
import choriyevPhoto from '@/public/team/choriyev-xojiakbar.webp'
import sobitovPhoto from '@/public/team/sobitov-oybek.webp'
import Image, { type StaticImageData } from 'next/image'
import { useEffect, useRef, useState, type CSSProperties } from 'react'

interface BaseTeamMember {
	id: number
	name: string
	photo: StaticImageData
}

interface LocalizedTeamMember extends BaseTeamMember {
	role: string
	bio: string
}

const teamMembers: BaseTeamMember[] = [
	{
		id: 1,
		name: 'Choriyev Xojiakbar',
		photo: choriyevPhoto,
	},
	{
		id: 2,
		name: 'Amirqulov Shoxrux',
		photo: amirqulovPhoto,
	},
	{
		id: 3,
		name: 'Sobitov Oybek',
		photo: sobitovPhoto,
	},
]

interface TeamCardProps {
	member: LocalizedTeamMember
	index: number
	isVisible: boolean
}

function TeamCard({ member, index, isVisible }: TeamCardProps) {
	const animationStyle: CSSProperties = {
		transitionDelay: `${110 + index * 80}ms`,
		willChange: 'transform, opacity',
	}

	return (
		<div
			className={`transform-gpu transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none ${
				isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
			}`}
			style={animationStyle}
		>
			<article
				className='group relative h-full overflow-hidden rounded-3xl p-6 md:p-7 transition-transform duration-300 hover:-translate-y-1'
				style={{
					background:
						'linear-gradient(160deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 244, 240, 0.86) 100%)',
					border: '1px solid rgba(4, 33, 71, 0.12)',
					boxShadow: '0 14px 32px -26px rgba(4, 33, 71, 0.5)',
				}}
			>
				<div
					className='absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100'
					style={{
						background:
							'linear-gradient(90deg, rgba(201, 168, 76, 0) 0%, rgba(201, 168, 76, 0.9) 50%, rgba(201, 168, 76, 0) 100%)',
					}}
				/>

				<div
					className='relative mb-6 aspect-3/4 rounded-2xl'
					style={{
						padding: '2px',
						background:
							'linear-gradient(145deg, rgba(222, 189, 111, 0.92) 0%, rgba(201, 168, 76, 0.45) 42%, rgba(123, 103, 60, 0.4) 100%)',
						boxShadow:
							'0 14px 32px -20px rgba(4, 33, 71, 0.55), inset 0 0 0 1px rgba(245, 244, 240, 0.55)',
					}}
				>
					<div
						className='relative h-full w-full overflow-hidden rounded-[0.9rem]'
						style={{
							background:
								'linear-gradient(180deg, rgba(152, 151, 142, 1) 0%, rgba(143, 144, 138, 1) 44%, rgba(32, 79, 145, 1) 100%)',
						}}
					>
						<div
							className='absolute inset-2 rounded-[0.7rem] pointer-events-none'
							style={{ border: '1px solid rgba(201, 168, 76, 0.45)' }}
						/>
						<div
							className='absolute inset-0 pointer-events-none'
							style={{
								background:
									'radial-gradient(circle at 50% 14%, rgba(245, 244, 240, 0.35) 0%, rgba(245, 244, 240, 0) 54%)',
							}}
						/>

						<Image
							src={member.photo}
							alt={`${member.name} portrait`}
							fill
							loading='lazy'
							quality={75}
							placeholder='blur'
							sizes='(min-width: 1280px) 24vw, (min-width: 768px) 30vw, 92vw'
							className='object-contain object-bottom transform-gpu transition-transform duration-500 group-hover:scale-[1.02]'
						/>

						<div
							className='absolute inset-0 pointer-events-none'
							style={{
								background:
									'linear-gradient(180deg, rgba(4, 33, 71, 0.02) 54%, rgba(4, 33, 71, 0.3) 100%)',
							}}
						/>
					</div>
				</div>

				<h3
					className='text-2xl font-serif font-semibold leading-tight'
					style={{ color: '#042147' }}
				>
					{member.name}
				</h3>
				<p className='mt-2 text-sm font-medium' style={{ color: '#C9A84C' }}>
					{member.role}
				</p>
				<p
					className='mt-4 text-sm leading-relaxed'
					style={{ color: 'rgba(4, 33, 71, 0.74)' }}
				>
					{member.bio}
				</p>
			</article>
		</div>
	)
}

export function Team() {
	const sectionRef = useRef<HTMLDivElement>(null)
	const [isVisible, setIsVisible] = useState(false)
	const { t } = useLanguage()

	useEffect(() => {
		if (!sectionRef.current) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					requestAnimationFrame(() => setIsVisible(true))
					observer.disconnect()
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
		)

		observer.observe(sectionRef.current)
		return () => observer.disconnect()
	}, [])

	const localizedMembers: LocalizedTeamMember[] = teamMembers.map(
		(member, index) => ({
			...member,
			role: t.team.members[index]?.role ?? t.team.members[0].role,
			bio: t.team.members[index]?.bio ?? t.team.members[0].bio,
		}),
	)

	return (
		<section
			id='team'
			ref={sectionRef}
			className='section-shell relative overflow-hidden py-24 px-6'
			style={{ backgroundColor: '#F5F4F0' }}
		>
			<SectionOrnaments tone='light' />

			<div className='relative z-10 max-w-7xl mx-auto'>
				<div className='flex items-center justify-center gap-4 mb-12'>
					<div
						className='flex-1 h-px'
						style={{ backgroundColor: 'rgba(4, 33, 71, 0.15)' }}
					/>
					<span className='text-2xl' style={{ color: '#C9A84C', opacity: 0.6 }}>
						◇
					</span>
					<div
						className='flex-1 h-px'
						style={{ backgroundColor: 'rgba(4, 33, 71, 0.15)' }}
					/>
				</div>

				<div
					className={`text-center mb-16 transform-gpu transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
					}`}
					style={{ transitionDelay: '40ms' }}
				>
					<h2
						className='text-5xl md:text-6xl font-serif font-bold mb-4'
						style={{ color: '#042147' }}
					>
						{t.team.title}
					</h2>
					<p
						className='text-lg max-w-2xl mx-auto leading-relaxed'
						style={{ color: 'rgba(4, 33, 71, 0.72)' }}
					>
						{t.team.subtitle}
					</p>
				</div>

				<div className='grid md:grid-cols-3 gap-6 lg:gap-8'>
					{localizedMembers.map((member, idx) => (
						<TeamCard
							key={member.id}
							member={member}
							index={idx}
							isVisible={isVisible}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
