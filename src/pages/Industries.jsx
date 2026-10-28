import { useParams, Navigate } from 'react-router-dom'
import { industries } from '../data/siteContent.js'
import { DetailPage, IndustryIndex } from './DetailPage.jsx'
export function IndustriesIndexPage(){return <IndustryIndex industries={industries}/>}
export default function IndustryPage(){const {slug}=useParams();const item=industries.find((industry)=>industry.slug===slug);if(!item)return <Navigate to="/404" replace/>;return <DetailPage data={{title:`${item.name} calls and lead generation`,intro:item.summary,sections:item.sections}} eyebrow="Industry"/>}
