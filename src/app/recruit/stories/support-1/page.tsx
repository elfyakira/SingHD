import SupportMemberInterview from '@/components/recruit/SupportMemberInterview'
import { getSupportMemberBySlug } from '@/data/support-members'
import { notFound } from 'next/navigation'

export default function SupportMember1Page() {
  const member = getSupportMemberBySlug('support-1')
  if (!member) return notFound()
  return <SupportMemberInterview member={member} />
}
