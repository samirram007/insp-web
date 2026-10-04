import { createFileRoute } from '@tanstack/react-router'
import { VideoGallery } from '#/features/video/video-page'

export const Route = createFileRoute('/video')({ component: VideoGallery })
