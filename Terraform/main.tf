resource "aws_s3_bucket" "portfolio" {
  bucket = "prajwal-portfolio-bucket2026"
  # ''force_destroy = true
}

resource "aws_s3_bucket_public_access_block" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_policy" "public_access" {
  bucket = aws_s3_bucket.portfolio.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Sid       = "PublicReadGetObject"
      Effect    = "Allow"
      Principal = "*"
      Action    = "s3:GetObject"
      Resource = [
        # "${aws_s3_bucket.portfolio.arn}/index.html",
        # "${aws_s3_bucket.portfolio.arn}/styles.css",
        # "${aws_s3_bucket.portfolio.arn}/main.js"
        "${aws_s3_bucket.portfolio.arn}/*"
      ]
    }]
  })
}
