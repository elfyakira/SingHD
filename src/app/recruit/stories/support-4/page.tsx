import SupportMemberInterview from '@/components/recruit/SupportMemberInterview'
import StructuredData from '@/components/StructuredData'
import { getSupportMemberBySlug } from '@/data/support-members'
import { buildSupportMemberMetadata, buildSupportMemberSchemas } from '@/lib/support-member-seo'
import { notFound } from 'next/navigation'

export const metadata = buildSupportMemberMetadata('support-4')

export default function SupportMember4Page() {
  const member = getSupportMemberBySlug('support-4')
  if (!member) return notFound()
  return (
    <>
      <StructuredData data={buildSupportMemberSchemas('support-4')} />
      <SupportMemberInterview member={member} />
    </>
  )
}
