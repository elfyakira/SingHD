import SupportMemberInterview from '@/components/recruit/SupportMemberInterview'
import StructuredData from '@/components/StructuredData'
import { getSupportMemberBySlug } from '@/data/support-members'
import { buildSupportMemberMetadata, buildSupportMemberSchemas } from '@/lib/support-member-seo'
import { notFound } from 'next/navigation'

export const metadata = buildSupportMemberMetadata('support-1')

export default function SupportMember1Page() {
  const member = getSupportMemberBySlug('support-1')
  if (!member) return notFound()
  return (
    <>
      <StructuredData data={buildSupportMemberSchemas('support-1')} />
      <SupportMemberInterview member={member} />
    </>
  )
}
