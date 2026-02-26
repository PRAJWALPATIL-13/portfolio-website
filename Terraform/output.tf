
output "website_url" {
  value = aws_s3_bucket_website_configuration.portfolio.website_endpoint
}

output "s3_bucket_name" {
  description = "Name of the created S3 bucket"
  value       = aws_s3_bucket.portfolio.id
}

# output "upload_command" {
#   description = "Command to sync files"
#   value       = <<-EOT
#     aws s3 sync "C:\Users\<>\devops-portfolio" s3://prajwal-portfolio-bucket2026 --exclude 'terraform/*' --exclude '.git/*'
#   EOT
# }
