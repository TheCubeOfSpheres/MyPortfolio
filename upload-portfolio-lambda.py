import boto3
from botocore.client import Config
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):

    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))
    
    portfolio_bucket = s3.Bucket('portfolio.architectsandbox.net')
    build_bucket = s3.Bucket('portfoliobuild.architectsandbox.net')
    
    portfolio_zip = StringIO.StringIO()
    build_bucket.download_fileobj('portfolioartifact.zip', portfolio_zip)
    
    with zipfile.ZipFile(portfolio_zip) as myzip:
        for nm in myzip.namelist():
            obj = myzip.open(nm)
            mime_type = mimetypes.guess_type(nm)[0]
            portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': str(mime_type)})
            portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
    # DeployPortfolio
    return 'Hello From Lambda'