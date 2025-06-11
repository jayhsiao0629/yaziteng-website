"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, MessageCircle, ChevronDown, X, Menu } from "lucide-react"

// Sample data
const products = [
  {
    id: 1,
    slug: "owl-alarm",
    name: "貓頭鷹防身警報器",
    img: "/placeholder.svg?height=300&width=300",
    desc: "小巧可愛的貓頭鷹造型防身警報器，聲音響亮，攜帶方便，是女性朋友的最佳防身夥伴。",
    category: "防身警報器",
    price: "150-200",
  },
  {
    id: 2,
    slug: "fire-extinguisher-keychain",
    name: "滅火器造型鑰匙圈",
    img: "/placeholder.svg?height=300&width=300",
    desc: "精緻的滅火器造型鑰匙圈，提醒大家注意消防安全，適合作為宣導品或紀念品。",
    category: "防火產品",
    price: "80-120",
  },
  {
    id: 3,
    slug: "safety-whistle",
    name: "安全哨子",
    img: "/placeholder.svg?height=300&width=300",
    desc: "高音量安全哨子，緊急時刻的求救利器，小巧輕便，適合隨身攜帶。",
    category: "防身警報器",
    price: "50-80",
  },
  {
    id: 4,
    slug: "fire-safety-sticker",
    name: "消防安全貼紙組",
    img: "/placeholder.svg?height=300&width=300",
    desc: "精美的消防安全宣導貼紙，適合學校、公司行號進行消防教育宣導使用。",
    category: "紀念贈品",
    price: "30-50",
  },
  {
    id: 5,
    slug: "emergency-light",
    name: "緊急照明燈",
    img: "/placeholder.svg?height=300&width=300",
    desc: "多功能緊急照明燈，具備手電筒、警示燈功能，停電或緊急狀況的好幫手。",
    category: "防火產品",
    price: "200-300",
  },
  {
    id: 6,
    slug: "commemorative-badge",
    name: "消防紀念徽章",
    img: "/placeholder.svg?height=300&width=300",
    desc: "精緻的消防紀念徽章，適合作為活動紀念品或表揚用品。",
    category: "紀念贈品",
    price: "100-150",
  },
]

const patents = [
  {
    id: 1,
    title: "多功能防身警報器專利",
    img: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    title: "緊急照明裝置專利",
    img: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    title: "安全哨子改良專利",
    img: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    title: "消防宣導用品專利",
    img: "/placeholder.svg?height=400&width=300",
  },
]

// Navigation state management
type Page = "home" | "shop" | "patents" | "product"

interface AppState {
  currentPage: Page
  selectedProduct: (typeof products)[0] | null
  selectedPatent: (typeof patents)[0] | null
  selectedCategory: string
  sortBy: string
  mobileMenuOpen: boolean
}

// Navbar Component
function Navbar({
  currentPage,
  onNavigate,
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  currentPage: Page
  onNavigate: (page: Page, data?: any) => void
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => onNavigate("home")} className="text-xl font-bold text-blue-600 hover:text-blue-700">
            亞之騰有限公司
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => onNavigate("home")}
              className={`font-medium ${currentPage === "home" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
            >
              首頁
            </button>
            <button
              onClick={() => onNavigate("shop")}
              className={`font-medium ${currentPage === "shop" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
            >
              商品
            </button>
            <button
              onClick={() => onNavigate("patents")}
              className={`font-medium ${currentPage === "patents" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
            >
              專利
            </button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  onNavigate("home")
                  setMobileMenuOpen(false)
                }}
                className={`text-left py-2 font-medium ${currentPage === "home" ? "text-blue-600" : "text-gray-700"}`}
              >
                首頁
              </button>
              <button
                onClick={() => {
                  onNavigate("shop")
                  setMobileMenuOpen(false)
                }}
                className={`text-left py-2 font-medium ${currentPage === "shop" ? "text-blue-600" : "text-gray-700"}`}
              >
                商品
              </button>
              <button
                onClick={() => {
                  onNavigate("patents")
                  setMobileMenuOpen(false)
                }}
                className={`text-left py-2 font-medium ${currentPage === "patents" ? "text-blue-600" : "text-gray-700"}`}
              >
                專利
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">聯絡資訊</h3>
            <div className="space-y-2">
              <a href="tel:0965659193" className="flex items-center hover:text-blue-300">
                <Phone className="w-4 h-4 mr-2" />
                0965-659-193
              </a>
              <a href="tel:0286853499" className="flex items-center hover:text-blue-300">
                <Phone className="w-4 h-4 mr-2" />
                02-8685-3499
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">線上聯繫</h3>
            <div className="space-y-2">
              <a href="mailto:chih629@yahoo.com.tw" className="flex items-center hover:text-blue-300">
                <Mail className="w-4 h-4 mr-2" />
                chih629@yahoo.com.tw
              </a>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                LineID: chih629
              </div>
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold text-blue-300">如欲大量購買請來電洽詢</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Home Page
function HomePage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="貓頭鷹警報器示意圖"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              消防局宣導商品
              <br />
              設計製造
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              專業製造消防宣導品、防身警報器、紀念品等產品，品質優良，價格合理
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onNavigate("shop")}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                商品一覽
              </button>
              <button
                onClick={() => onNavigate("patents")}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                專利一覽
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Shop Page
function ShopPage({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  onNavigate,
}: {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  sortBy: string
  setSortBy: (sort: string) => void
  onNavigate: (page: Page, data?: any) => void
}) {
  const categories = ["全部", "防身警報器", "防火產品", "紀念贈品"]

  const filteredProducts = products.filter(
    (product) => selectedCategory === "全部" || product.category === selectedCategory,
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "價格低到高") {
      return Number.parseInt(a.price.split("-")[0]) - Number.parseInt(b.price.split("-")[0])
    } else if (sortBy === "價格高到低") {
      return Number.parseInt(b.price.split("-")[0]) - Number.parseInt(a.price.split("-")[0])
    }
    return 0
  })

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">消防宣導品、禮品、紀念品 | 線上預覽</h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>預設排序</option>
              <option>價格低到高</option>
              <option>價格高到低</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => onNavigate("product", product)}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden text-left"
            >
              <img src={product.img || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">NT$ {product.price}</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{product.category}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// Product Detail Page
function ProductDetailPage({
  product,
  onNavigate,
}: {
  product: (typeof products)[0]
  onNavigate: (page: Page, data?: any) => void
}) {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <button onClick={() => onNavigate("home")} className="hover:text-blue-600">
            首頁
          </button>
          <span>→</span>
          <button onClick={() => onNavigate("shop")} className="hover:text-blue-600">
            商品
          </button>
          <span>→</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* Product Image */}
          <div className="lg:col-span-7">
            <img src={product.img || "/placeholder.svg"} alt={product.name} className="w-full rounded-lg shadow-lg" />
          </div>

          {/* Product Info */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>

            <div className="text-2xl font-bold text-blue-600 mb-6">NT$ {product.price}</div>

            <p className="text-gray-700 text-lg mb-6">{product.desc}</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="font-semibold text-gray-900 w-20">分類：</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{product.category}</span>
              </div>
            </div>

            <a
              href="tel:0965659193"
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              立即來電洽詢
            </a>

            <div className="mt-4 text-center text-sm text-gray-500">大量購買享有優惠價格</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Patents Page
function PatentsPage({
  selectedPatent,
  setSelectedPatent,
}: {
  selectedPatent: (typeof patents)[0] | null
  setSelectedPatent: (patent: (typeof patents)[0] | null) => void
}) {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">專利一覽</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {patents.map((patent) => (
            <button
              key={patent.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden text-left"
              onClick={() => setSelectedPatent(patent)}
            >
              <img src={patent.img || "/placeholder.svg"} alt={patent.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{patent.title}</h3>
                <p className="text-sm text-gray-500 mt-2">點擊查看詳細內容</p>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedPatent && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedPatent(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedPatent.img || "/placeholder.svg"}
                alt={selectedPatent.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <h3 className="text-lg font-semibold">{selectedPatent.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Main App Component
export default function App() {
  const [state, setState] = useState<AppState>({
    currentPage: "home",
    selectedProduct: null,
    selectedPatent: null,
    selectedCategory: "全部",
    sortBy: "預設排序",
    mobileMenuOpen: false,
  })

  // Handle navigation
  const handleNavigate = (page: Page, data?: any) => {
    setState((prev) => ({
      ...prev,
      currentPage: page,
      selectedProduct: page === "product" ? data : null,
      mobileMenuOpen: false,
    }))
  }

  // Update URL hash for better UX (optional)
  useEffect(() => {
    const hash = state.currentPage === "home" ? "" : state.currentPage
    if (typeof window !== "undefined") {
      window.location.hash = hash
    }
  }, [state.currentPage])

  // Handle browser back/forward (optional)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home"
      if (hash !== state.currentPage) {
        setState((prev) => ({ ...prev, currentPage: hash as Page }))
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("hashchange", handleHashChange)
      return () => window.removeEventListener("hashchange", handleHashChange)
    }
  }, [state.currentPage])

  const renderCurrentPage = () => {
    switch (state.currentPage) {
      case "shop":
        return (
          <ShopPage
            selectedCategory={state.selectedCategory}
            setSelectedCategory={(category) => setState((prev) => ({ ...prev, selectedCategory: category }))}
            sortBy={state.sortBy}
            setSortBy={(sort) => setState((prev) => ({ ...prev, sortBy: sort }))}
            onNavigate={handleNavigate}
          />
        )
      case "product":
        return state.selectedProduct ? (
          <ProductDetailPage product={state.selectedProduct} onNavigate={handleNavigate} />
        ) : (
          <HomePage onNavigate={handleNavigate} />
        )
      case "patents":
        return (
          <PatentsPage
            selectedPatent={state.selectedPatent}
            setSelectedPatent={(patent) => setState((prev) => ({ ...prev, selectedPatent: patent }))}
          />
        )
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar
        currentPage={state.currentPage}
        onNavigate={handleNavigate}
        mobileMenuOpen={state.mobileMenuOpen}
        setMobileMenuOpen={(open) => setState((prev) => ({ ...prev, mobileMenuOpen: open }))}
      />
      <main className="flex-1">{renderCurrentPage()}</main>
      <Footer />
    </div>
  )
}
