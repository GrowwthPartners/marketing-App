import AppKit
import Foundation

let root = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let outputURL = root.appendingPathComponent("public/social/cfo-og-card.png")
let bannerURL = root.appendingPathComponent("src/assets/hero/jatin-banner.webp")
let logoURL = root.appendingPathComponent("public/logo/company-logo.png")

let size = NSSize(width: 1200, height: 630)

func image(at url: URL) -> NSImage {
  guard let image = NSImage(contentsOf: url) else {
    fatalError("Could not load image at \(url.path)")
  }
  return image
}

func font(_ name: String, _ size: CGFloat, fallbackWeight: NSFont.Weight) -> NSFont {
  NSFont(name: name, size: size) ?? .systemFont(ofSize: size, weight: fallbackWeight)
}

func drawText(_ text: String, rect: NSRect, font: NSFont, color: NSColor, lineHeight: CGFloat? = nil) {
  let paragraph = NSMutableParagraphStyle()
  paragraph.lineBreakMode = .byWordWrapping
  if let lineHeight {
    paragraph.minimumLineHeight = lineHeight
    paragraph.maximumLineHeight = lineHeight
  }

  let attributes: [NSAttributedString.Key: Any] = [
    .font: font,
    .foregroundColor: color,
    .paragraphStyle: paragraph,
    .kern: 0,
  ]

  NSString(string: text).draw(in: rect, withAttributes: attributes)
}

func drawPill(_ text: String, rect: NSRect) {
  let path = NSBezierPath(roundedRect: rect, xRadius: rect.height / 2, yRadius: rect.height / 2)
  NSColor(calibratedRed: 0.95, green: 0.93, blue: 1.0, alpha: 1).setFill()
  path.fill()

  drawText(
    text,
    rect: NSRect(x: rect.minX + 22, y: rect.minY + 12, width: rect.width - 44, height: rect.height - 18),
    font: font("AvenirNext-DemiBold", 20, fallbackWeight: .semibold),
    color: NSColor(calibratedRed: 0.33, green: 0.23, blue: 0.82, alpha: 1)
  )
}

let image = NSImage(size: size)
image.lockFocus()

let canvas = NSRect(origin: .zero, size: size)

let background = NSGradient(colors: [
  NSColor(calibratedRed: 1.0, green: 1.0, blue: 1.0, alpha: 1),
  NSColor(calibratedRed: 0.965, green: 0.955, blue: 1.0, alpha: 1),
  NSColor(calibratedRed: 1.0, green: 0.965, blue: 0.985, alpha: 1),
])!
background.draw(in: canvas, angle: 0)

let accent = NSGradient(colors: [
  NSColor(calibratedRed: 0.22, green: 0.44, blue: 0.89, alpha: 1),
  NSColor(calibratedRed: 0.32, green: 0.33, blue: 0.88, alpha: 1),
  NSColor(calibratedRed: 0.52, green: 0.24, blue: 0.85, alpha: 1),
  NSColor(calibratedRed: 0.93, green: 0.55, blue: 0.71, alpha: 1),
])!

let rightPanel = NSBezierPath(roundedRect: NSRect(x: 690, y: 34, width: 470, height: 562), xRadius: 34, yRadius: 34)
accent.draw(in: rightPanel, angle: 235)

let banner = image(at: bannerURL)
let bannerRect = NSRect(x: 715, y: 58, width: 420, height: 514)
NSGraphicsContext.saveGraphicsState()
NSBezierPath(roundedRect: bannerRect, xRadius: 30, yRadius: 30).addClip()
banner.draw(
  in: bannerRect,
  from: NSRect(x: 935, y: 42, width: 610, height: 790),
  operation: .sourceOver,
  fraction: 1
)
NSGraphicsContext.restoreGraphicsState()

let logo = image(at: logoURL)
logo.draw(in: NSRect(x: 62, y: 498, width: 64, height: 56))

drawText(
  "Growwth Partners",
  rect: NSRect(x: 144, y: 517, width: 280, height: 30),
  font: font("AvenirNext-DemiBold", 24, fallbackWeight: .semibold),
  color: NSColor(calibratedRed: 0.09, green: 0.08, blue: 0.18, alpha: 1)
)

drawPill("GUIDED BY JATIN DETWANI", rect: NSRect(x: 62, y: 440, width: 380, height: 52))

drawText(
  "Fractional CFO\nServices for\nSingapore Businesses",
  rect: NSRect(x: 62, y: 238, width: 620, height: 180),
  font: font("AvenirNext-Heavy", 46, fallbackWeight: .heavy),
  color: NSColor(calibratedRed: 0.09, green: 0.07, blue: 0.05, alpha: 1),
  lineHeight: 54
)

drawText(
  "Senior finance leadership from an award-winning CFO, built for founders who need clarity before the next big decision.",
  rect: NSRect(x: 66, y: 115, width: 565, height: 92),
  font: font("AvenirNext-Medium", 24, fallbackWeight: .medium),
  color: NSColor(calibratedRed: 0.32, green: 0.29, blue: 0.38, alpha: 1),
  lineHeight: 30
)

let rule = NSBezierPath(roundedRect: NSRect(x: 66, y: 80, width: 170, height: 6), xRadius: 3, yRadius: 3)
accent.draw(in: rule, angle: 0)

drawText(
  "cfo.growwthpartners.com",
  rect: NSRect(x: 66, y: 45, width: 340, height: 26),
  font: font("AvenirNext-DemiBold", 22, fallbackWeight: .semibold),
  color: NSColor(calibratedRed: 0.33, green: 0.23, blue: 0.82, alpha: 1)
)

image.unlockFocus()

guard
  let tiffData = image.tiffRepresentation,
  let bitmap = NSBitmapImageRep(data: tiffData),
  let pngData = bitmap.representation(using: .png, properties: [:])
else {
  fatalError("Could not encode PNG")
}

try pngData.write(to: outputURL)
print("Generated \(outputURL.path)")
