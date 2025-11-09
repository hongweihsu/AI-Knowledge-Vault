'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status !== 'loading' && !session) {
      router.push('/login')
    }
  }, [session, status, router])

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-600">歡迎回來, {session.user?.name}!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AI 分析卡片 */}
          <div className="bg-white p-6 rounded-lg shadow border hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">文件分析</h2>
            <p className="text-gray-600 mb-4">上傳文件進行 AI 分析和摘要</p>
            <button 
              onClick={() => router.push('/analyze')}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              開始分析
            </button>
          </div>

          {/* 歷史記錄卡片 */}
          <div className="bg-white p-6 rounded-lg shadow border hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">歷史記錄</h2>
            <p className="text-gray-600 mb-4">查看之前的分析結果</p>
            <button 
              onClick={() => router.push('/history')}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              查看記錄
            </button>
          </div>

          {/* 用戶設定卡片 */}
          <div className="bg-white p-6 rounded-lg shadow border hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">帳戶設定</h2>
            <p className="text-gray-600 mb-4">管理您的帳戶和偏好設定</p>
            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
              設定
            </button>
          </div>
        </div>

        {/* 配額顯示 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">使用狀況</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">5</div>
              <div className="text-gray-600">本月查詢次數</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">95</div>
              <div className="text-gray-600">剩餘配額</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500">免費版</div>
              <div className="text-gray-600">當前方案</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
