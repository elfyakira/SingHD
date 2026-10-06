import SupportMemberInterview from '@/components/recruit/SupportMemberInterview'
import StructuredData from '@/components/StructuredData'
import { getSupportMemberBySlug } from '@/data/support-members'
import { buildSupportMemberMetadata, buildSupportMemberSchemas } from '@/lib/support-member-seo'
import { notFound } from 'next/navigation'

export const metadata = buildSupportMemberMetadata('support-3')

export default function SupportMember3Page() {
  const member = getSupportMemberBySlug('support-3')
  if (!member) return notFound()
  return (
    <>
      <StructuredData data={buildSupportMemberSchemas('support-3')} />
      <SupportMemberInterview member={member} />
    </>
  )
}
