import { Flex, Text, HStack } from '@chakra-ui/react'
import { ReactElement } from 'react'
import Link from 'next/link'

interface FeatureProps {
	text: string
	textColor?: string
	textSize?: string | Array<string>
	iconBg?: string
	icon: ReactElement
	isPhoneNumber?: boolean
	isEmail?: boolean
}

const IconText = ({
	text,
	textColor,
	textSize,
	icon,
	iconBg,
	isPhoneNumber,
	isEmail,
}: FeatureProps) => {
	const circleSize = '3rem'

	const component = (
		<HStack
			as={'a'}
			align={'center'}
			spacing={'1rem'}
			alignItems={'center'}
			mt={'2rem'}
			mb={'1rem'}
		>
			<Flex
				w={circleSize}
				h={circleSize}
				align={'center'}
				justify={'center'}
				rounded={'full'}
				bg={iconBg || 'brandLight'}
			>
				{icon}
			</Flex>
			<Text
				fontWeight={'bold'}
				color={textColor || 'brand'}
				fontSize={textSize || '1.75rem'}
				ml={'2rem'}
			>
				{text}
			</Text>
		</HStack>
	)

	if (isPhoneNumber) {
		return (
			<Link href={'tel:' + text.replace(/\D/g, '')} passHref legacyBehavior>
				{component}
			</Link>
		);
	}

	if (isEmail) {
		return (
			<Link href={'mailto:' + text} passHref legacyBehavior>
				{component}
			</Link>
		);
	}

	return component
}

export default IconText
