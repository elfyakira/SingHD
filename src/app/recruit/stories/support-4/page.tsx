import SupportMemberInterview from '@/components/recruit/SupportMemberInterview'
import { getSupportMemberBySlug } from '@/data/support-members'
import { notFound } from 'next/navigation'

export default function SupportMember4Page() {
  const member = getSupportMemberBySlug('support-4')
  if (!member) return notFound()
  return <SupportMemberInterview member={member} />
}
